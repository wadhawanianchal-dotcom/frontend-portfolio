export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-5xl font-bold text-blue-600">
        Anchal Wadhwani
      </h1>

      <p className="mt-4 text-2xl">
        BS Computer Science Student
      </p>

      <p className="mt-6 max-w-2xl text-center text-gray-600">
        I am learning Frontend Development using React, JavaScript,
        HTML, CSS, and AI-assisted development. This portfolio is part
        of my FlyRank Frontend AI Engineering Internship.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
          Download Resume
        </button>
      </div>
    </main>
  );
}