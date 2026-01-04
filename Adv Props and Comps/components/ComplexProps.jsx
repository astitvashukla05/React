import users from "../data";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      {/* Avatar */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl mb-4 ${theme.avatarBg}`}
      >
        {user.avatar}
      </div>

      {/* User Name */}
      <h4 className="text-lg font-semibold">{user.name}</h4>
      <p className="text-sm opacity-80">{user.email}</p>

      {/* Stats */}
      {user.stats && (
        <div className="grid grid-cols-3 gap-4 mt-4 text-center text-sm">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key}>
              <div className="font-bold">{value}</div>
              <div className="capitalize opacity-70">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions && (
        <div className="flex gap-3 mt-6">
          <button
            className={`px-4 py-2 rounded-lg text-sm ${actions.primary.className}`}
            onClick={() => actions.primary.onClick(alert)}
          >
            {actions.primary.label}
          </button>

          <button
            className={`px-4 py-2 rounded-lg text-sm ${actions.secondary.className}`}
            onClick={() => actions.secondary.onClick(alert)}
          >
            {actions.secondary.label}
          </button>
        </div>
      )}
    </div>
  );
}

function ComplexProps() {
  return (
    <section className="space-y-8">
      <header>
        <h3 className="text-2xl font-bold">User Profile Card</h3>
        <p className="text-gray-500">
          Demonstration of complex props with nested objects and actions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </section>
  );
}

export default ComplexProps;
