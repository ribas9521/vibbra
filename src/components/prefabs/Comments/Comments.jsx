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
    <div className="col-sm-5 no-padding-xs">
      <hr className="offset-sm hidden-xs" />

      <div className="comments white">
        <h2 className="h3">Messangens</h2>
        <br />

        <div className="wrapper">
          {' '}
          <div className="content">{renderItems({ comments })}</div>
        </div>
      </div>
      <hr className="offset-lg" />
      <hr className="offset-md" />

      <button
        className="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#Modal-Comment"
      >
        {' '}
        <i className="ion-chatbox-working"></i> Add comment{' '}
      </button>
      <hr className="offset-md visible-xs" />
    </div>
  );
};

export default Comments;
