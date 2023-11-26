const request = require("supertest");
const app = require("../app");
const Task = require("../model/task.model");

jest.mock("../model/task.model");


const mockTask = {
    "_id": "65620d4503f87e2963794c7c",
    "title": "Read Chapter 5",
    "description": "Read Chapter 5 of 'the Great Gatsby",
    "userId": "6561ef67c22e2c235c455492",
    "dueDate": "2023-11-30T09:30:00.999Z",
    "status": "Pending"
}

describe("get all task", () => {
    const getAllTaskAPI = "/api/tasks"
    it("should get all tasks", async () => {
        Task.find.mockResolvedValue([mockTask]);
        const response = await request(app).get(getAllTaskAPI).send();

        expect(response.status).toBe(200);
        expect(response.body).toEqual([mockTask]);
        expect(Task.find).toHaveBeenCalled()
    });

    it("should failed to get all tasks", async () => {
        Task.find.mockRejectedValue({ message: "bad error" });

        const response = await request(app).get(getAllTaskAPI).send();

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "bad error", error: { message: "bad error" } });
        expect(Task.find).toHaveBeenCalled();
    });
});
