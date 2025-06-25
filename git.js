var repo = new Git("newRepo")

// Constructor for Git object
function Git(name) {
    this.name = name;
}

// Method to add a file to the repository
function Commit(id, message) {
    this.id = id;
    this.message = message;
}

