import MonsterForm from "@/components/MonsterForm";
import MonsterList from "@/components/MonsterList";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">D&D Monster Tracker</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Monster</h2>
          <MonsterForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Monster List</h2>
          <MonsterList />
        </div>
      </div>
    </main>
  );
}
