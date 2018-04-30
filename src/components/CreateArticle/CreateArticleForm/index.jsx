import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../../Banner';

const CreateArticle = ({
  handleInputChange,
  categories, handleSubmit, errors, editing, article, title, category, content, updateArticle,
}) => ((
  <div>
    {/* Header */}
    <Banner
      backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
      title={editing ? `Editing Article: ${article.title}` : 'Write an article'}
    />
    {/* END Header */}
    {/* Main container */}
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <ul className="list-group">
                {errors.map(error => <li key={error.message} className="list-group-item text-danger">{error.message}</li>)}
              </ul>
              <form className="p-30 bg-gray rounded" onSubmit={editing ? updateArticle : handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-12 my-5">
                    <input type="file" className="form-control" onChange={handleInputChange} name="image" />
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <select name="category" onChange={handleInputChange} value={category} id className="form-control form-control-lg">
                      <option value>Select category</option>
                      {categories.map(categoryInArray =>
                        <option key={categoryInArray.id} value={categoryInArray.id}>{categoryInArray.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={4}
                    placeholder="Content"
                    name="content"
                    value={content}
                    onChange={handleInputChange}
                    defaultValue=""
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-lg btn-primary" type="submit">{editing ? 'Update Article' : 'Create Article'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* END Main container */}
  </div>
));

CreateArticle.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
  })).isRequired,
  editing: PropTypes.bool.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  updateArticle: PropTypes.func.isRequired,
};

CreateArticle.defaultProps = {
  article: null,
};

export default CreateArticle;
