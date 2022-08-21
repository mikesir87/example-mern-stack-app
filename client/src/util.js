export function fetchItems() {
  return fetch(`http://localhost:4000/items`);
}

export function deleteItem(id) {
  return fetch(
    `http://localhost:4000/items/${id}`, 
    { method: 'DELETE' }
  );
}

export function createItem(item) {
  return fetch(`http://localhost:4000/items`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' },
  });
}

export function updateItem(id, item) {
  return fetch(`http://localhost:4000/items/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: item.name,
      completed: !item.completed,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
}