const input = document.getElementById('student-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('student-list');
const clearBtn = document.getElementById('clear-btn');
const studentCount = document.getElementById('student-count');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search-input');

let count = 0;

// Update student count
const updateCount = () => {
  studentCount.textContent = count;
};

// Show error messages
const showError = (msg) => {
  errorMessage.textContent = msg;
  setTimeout(() => errorMessage.textContent = '', 2000);
};

// Add new student
addBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (!name) {
    showError("Name can't be empty!");
    return;
  }

  const li = document.createElement('li');
  li.className = 'student-item';
  li.setAttribute('draggable', 'true');
  li.innerHTML = `
    <span class="student-name">${name}</span>
    <div class="action-buttons">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  list.appendChild(li);
  input.value = '';
  count++;
  updateCount();
  updateNumbers();
});

// Handle edit and delete buttons
list.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('delete-btn')) {
    target.closest('li').remove();
    count--;
    updateCount();
    updateNumbers();
  }

  if (target.classList.contains('edit-btn')) {
    const li = target.closest('li');
    const nameSpan = li.querySelector('.student-name');
    const currentName = nameSpan.textContent.replace(/^\d+\.\s*/, '');
    const newName = prompt("Edit student name:", currentName);
    if (newName && newName.trim()) {
      nameSpan.textContent = newName.trim();
      updateNumbers();
    } else {
      showError("Name can't be empty!");
    }
  }
});

// Clear all students
clearBtn.addEventListener('click', () => {
  list.innerHTML = '';
  count = 0;
  updateCount();
});

// Filter students by search
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const students = list.querySelectorAll('.student-item');

  students.forEach(student => {
    const studentName = student.querySelector('.student-name').textContent.toLowerCase();
    student.style.display = studentName.includes(searchTerm) ? '' : 'none';
  });
});

// Drag-and-drop reordering
list.addEventListener('dragstart', (e) => {
  e.target.classList.add('dragging');
});

list.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging');
  updateNumbers();
});

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector('.dragging');
  const siblings = [...list.querySelectorAll('.student-item:not(.dragging)')];
  const closestSibling = siblings.reduce((closest, sibling) => {
    const box = sibling.getBoundingClientRect();
    const offset = e.clientY - box.top - box.height / 2;
    return offset < 0 && offset > closest.offset
      ? { offset, element: sibling }
      : closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;

  if (closestSibling) {
    list.insertBefore(draggingItem, closestSibling);
  } else {
    list.appendChild(draggingItem);
  }
});

// Update numbering after reorder or edit
function updateNumbers() {
  [...list.children].forEach((li, index) => {
    const nameSpan = li.querySelector('.student-name');
    const nameWithoutNumber = nameSpan.textContent.replace(/^\d+\.\s*/, '');
    nameSpan.textContent = `${index + 1}. ${nameWithoutNumber}`;
  });
}
