function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-slate-800">
            📧 Distributed Email Scheduler
          </h1>
          <span className="text-sm text-slate-500">
            Backend + Worker Active
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Compose Email */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            ✍️ Compose Email
          </h2>

          <div className="space-y-3">
            <input
              placeholder="Recipient Email"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Subject"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Email body"
              className="w-full border rounded-lg px-3 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
              Schedule Email
            </button>
          </div>
        </section>

        {/* Email Lists */}
        <section className="lg:col-span-2 space-y-6">
          
          {/* Scheduled Emails */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              🕒 Scheduled Emails
            </h2>

            <table className="w-full text-sm">
              <thead className="text-slate-500 border-b">
                <tr>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left">Subject</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">demo@example.com</td>
                  <td>Hello ReachInbox</td>
                  <td>
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                      Scheduled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Sent Emails */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              ✅ Sent Emails
            </h2>

            <table className="w-full text-sm">
              <thead className="text-slate-500 border-b">
                <tr>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left">Subject</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">user@example.com</td>
                  <td>Welcome!</td>
                  <td>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                      Sent
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </main>
    </div>
  );
}

export default App;
