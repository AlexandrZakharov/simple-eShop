(function appendUsers() {
  const tbody = document.getElementById('tbody');
  for(let user of userList) {
    const newTr = document.createElement('tr');
    tbody.append(newTr);
    for(let key in user) {
      const newTh = document.createElement('th');
      if(key === 'isAdmin') {
        continue;
      }
      if(key === 'removeRequest' && user.removeRequest === true) {
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-dark';
        removeButton.innerText = 'Remove';
        newTh.append(removeButton);
        removeButton.addEventListener('click', ()=>{
          newTr.remove();
          console.log('before', userList);
          let userIndex = userList.indexOf(user);
          userList.splice(userIndex, 1);
          console.log('after', userList);
        })
      } 
      if(key === 'removeRequest'){} 
      else newTh.innerText = user[key]
      newTr.append(newTh)
    }
  }
})()