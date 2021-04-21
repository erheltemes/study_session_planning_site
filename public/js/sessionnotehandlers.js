async function unenrollSession(event) {
    event.preventDefault();
    // using session user info to remove them from the course
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`api/sessionmember/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete session.');
      }
}

async function deleteNote(event) {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`api/notes/${id}`, {
        method: 'DELETE',
    })

    
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete session.');
      }
}

document.querySelector('.unenroll').addEventListener('submit', unenrollSession);
document.querySelector('.notedelete').addEventListener('delete', deleteNote);