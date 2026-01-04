

const users = [
  {
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "👩",
      role: "Admin",
      status: "Active",
      stats: {
        posts: 145,
        followers: 2834,
        following: 421,
      },
    },

    theme: {
      backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
      textColor: "text-gray-800",
      avatarBg: "bg-purple-300",
      badgeBg: "bg-purple-200",
    },

    actions: {
      primary: {
        label: "View Profile",
        className: "bg-purple-500 text-white hover:bg-purple-600",
        onClick: (setMessage) =>
          setMessage("Viewing Alice's profile"),
      },
      secondary: {
        label: "Message",
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        onClick: (setMessage) =>
          setMessage("Opening message to Alice"),
      },
    },
  },

  {
    user: {
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "👨",
      role: "Editor",
      status: "Inactive",
      stats: {
        posts: 87,
        followers: 1200,
        following: 305,
      },
    },

    theme: {
      backgroundColor: "bg-gradient-to-br from-green-100 to-emerald-100",
      textColor: "text-gray-800",
      avatarBg: "bg-green-300",
      badgeBg: "bg-green-200",
    },

    actions: {
      primary: {
        label: "View Profile",
        className: "bg-green-500 text-white hover:bg-green-600",
        onClick: (setMessage) =>
          setMessage("Viewing Bob's profile"),
      },
      secondary: {
        label: "Message",
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        onClick: (setMessage) =>
          setMessage("Opening message to Bob"),
      },
    },
  },

  {
    user: {
      name: "Charlie Lee",
      email: "charlie@example.com",
      avatar: "🧑‍💻",
      role: "Viewer",
      status: "Pending",
      stats: {
        posts: 12,
        followers: 340,
        following: 98,
      },
    },

    theme: {
      backgroundColor: "bg-gradient-to-br from-red-100 to-orange-100",
      textColor: "text-gray-800",
      avatarBg: "bg-red-300",
      badgeBg: "bg-red-200",
    },

    actions: {
      primary: {
        label: "Approve",
        className: "bg-red-500 text-white hover:bg-red-600",
        onClick: (setMessage) =>
          setMessage("Approving Charlie"),
      },
      secondary: {
        label: "Reject",
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        onClick: (setMessage) =>
          setMessage("Rejecting Charlie"),
      },
    },
  },
];
export default users