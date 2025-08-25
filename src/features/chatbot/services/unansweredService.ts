export async function deleteUnanswered(id: number): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/unanswereds/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!res.ok) {
      const data = await res.json();
      return { success: false, message: data.message || res.statusText };
    }
    return { success: true };
  } catch (err) {
    return { success: false, message: "Error de conexión al eliminar la pregunta" };
  }
}
