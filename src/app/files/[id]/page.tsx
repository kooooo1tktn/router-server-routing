// src/app/files/[id]/page.tsx
type FilePageProps = {
  id: string | number; // numberも受け入れるように
};

export default function FilePage({ id }: FilePageProps) {
  console.log("FilePage received id:", id, "type:", typeof id);

  return (
    <div>
      <h1>User ID</h1>
      <p>ID: {id}</p>
    </div>
  );
}
