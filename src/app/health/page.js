async function getHealthData() {
  return Promise.resolve({
    status: "OK",
    message: "Portfolio is running successfully",
  });
}

export default async function Health() {
  const data = await getHealthData();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Health Check</h1>

      <p className="mt-4">Status: {data.status}</p>
      <p>{data.message}</p>
    </main>
  );
}