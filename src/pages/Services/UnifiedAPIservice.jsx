import { api } from "../../api/apiClient";

export const UnifiedService = {
    postServiceRequest: (formData) => api.post("/api/service-form",formData),
}
