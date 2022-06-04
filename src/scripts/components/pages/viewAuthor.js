import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

// const viewAuthor = (obj) => {
//   clearDom();

//   const domString = `
//   <div class="mt-5 d-flex flex-wrap">
//    <div class="text-white ms-5 details">
//      <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
//      Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
//      <p>
//      <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
//         <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
//      </p>
//      <hr>
//     </div>
//   </div>`;
//   renderToDOM('#view', domString);

//   let domStringBooks = '';
//   const array = obj.authorsBooks;
//   array.forEach((item) => {
//     domStringBooks += `
//       <div class="card">
//         <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
//         <div class="card-body" style="height: 180px;">
//           <h5 class="card-title">${item.title}</h5>
//             <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
//             <hr>
//             <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
//             <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
//             <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
//         </div>
//       </div>`;
//   });
//   renderToDOM('#store', domStringBooks);
// };

const viewAuthor = (obj) => {
  clearDom();
  const domString = `
  <div class="text-white ms-5 details">
  <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
  Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
  <hr>
  <div id="authorsCollection"><div>`;
  const bookArr = Object.values(obj.bookObject);
  let bookStr = '';
  bookArr.forEach((item) => {
    bookStr += `<div class="text-white ms-5 details">
    <h5>${item.title} by ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
    Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
    <p>${item.description || ''}</p>
    <hr>
    <p>${item.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>
      $${item.price}` : `$${item.price}`}</p>
     </div>
   </div>
    `;
  });
  renderToDOM('#view', domString);
  renderToDOM('#authorsCollection', bookStr);
};

export default viewAuthor;
