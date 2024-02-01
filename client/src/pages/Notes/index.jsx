import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth.jsx";
import { Link } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const getAllNotes = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/notes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
      }
    );

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setNotes(data.data);
      console.log(data.data);
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="container py-8 flex flex-col gap-4">
      {notes.length === 0 && (
        <h1 className="text-2xl  font-bold">No notes found</h1>
      )}
      <div className=" flex flex-wrap gap-4 p-4">
        {notes.map((note) => (
          <div
            key={note._id}
            className="flex flex-col gap-4 p-4 items-center justify-center rounded-md  text-gray-800"
            style={{ backgroundColor: note.color }}
          >
            <h1 className="text-2xl font-bold">{note.title}</h1>
            <p className="text-xl">{note.description}</p>
          </div>
        ))}
      </div>

      <button>
        <Link
          to="/notes/create"
          className="bg-blue-500 text-white px4 py-2 rounded-md"
        >
          Create Note
        </Link>
      </button>
    </div>
  );
};

export default Notes;
