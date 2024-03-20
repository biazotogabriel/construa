import React from 'react';
import ReactDOM from 'react-dom/client';

export default async function createModal(Component) {
  function showModal() {
    return new Promise((resolve, reject) => {
      function onClose() {
        console.log('close');
        resolve(1);
      }
      try {
        const NewComponent = React.cloneElement(Component, {
          onClose,
        });
        modal.render(NewComponent);

        //Parent.render(Component, App);

        //return setTimeout(() => {
        //  onClose(), 1000;
        //});
      } catch (error) {
        return reject(error);
      }
    });
  }
  const modalTag = document.getElementById('modal');
  const modal = ReactDOM.createRoot(modalTag);
  await showModal();
  modalTag.innerHTML = '';
}

// async function run() {
//   const retorno = await createModal();
//   console.log(retorno);
// }
//run();
