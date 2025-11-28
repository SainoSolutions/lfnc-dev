import { api } from "../../api/apiClient";

export const EventService = {
    getAllEvents: () => api.get("/api/events"),
    getEventById: (id) => api.get(`/api/events/${id}`),
}
