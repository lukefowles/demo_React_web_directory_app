import React from 'react';
import Card from './Card';

function CardList( {users} ) {
  // Task 1 - Difficult
  // populate the card component dynamically from users.js
  return (
    // Return a card component with the right information
    <div>
      {/* Curly braces for JavaScript, we're returning a map */}
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
