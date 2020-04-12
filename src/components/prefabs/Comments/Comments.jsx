import React from 'react';
const Comments = ({ comments }) => {
  const Item = ({ name, title, message }) => (
    <>
      <h3>{name}</h3>
      <label>{title}</label>
      <p>{message}</p>
    </>
  );
  const renderItems = ({ comments }) =>
    comments.map((c, i) => (
      <Item key={i} name={c.user_name} title={c.title} message={c.message} />
    ));
  return (
    <div class="col-sm-5 no-padding-xs">
      <hr class="offset-sm hidden-xs" />

      <div class="comments white">
        <h2 class="h3">Messangens</h2>
        <br />

        <div class="wrapper">
          {' '}
          <div class="content">{renderItems({ comments })}</div>
        </div>
      </div>
      <hr class="offset-lg" />
      <hr class="offset-md" />

      <button
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#Modal-Comment"
      >
        {' '}
        <i class="ion-chatbox-working"></i> Add comment{' '}
      </button>
      <hr class="offset-md visible-xs" />
    </div>
  );
};

export default Comments;
