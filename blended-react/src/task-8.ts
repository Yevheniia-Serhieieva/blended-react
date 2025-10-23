enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

function getPermissions(role: Role) {
  if (role === "Admin") {
    return ["create", "read", "update", "delete"];
  } else if (role === "User") {
    return ["read", "update"];
  } else if (role === "Guest") {
    return ["read"];
  }
}

getPermissions(Role.Admin);
