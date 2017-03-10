import React from 'react';
import TextInput from '../common/TextInput';
import Textarea from '../common/Textarea';
import SelectInput from '../common/SelectInput';

const UserstoryForm = ({userstory, onSave, onDelete, onChange, saving, errors, deleteMode}) => {
  return (
    <form>
      <h1>Manage User stories</h1>
      <div className="box">
        <TextInput
          name="title"
          label="Title"
          value={ userstory.title }
          onChange={ onChange }
          error={ errors.title } />

        <Textarea
          name="description"
          label="Description"
          className="descriptionTextArea"
          value={ userstory.description }
          onChange={ onChange }
          error={ errors.description } />

        <input
          type="submit"
          disabled={ saving }
          value={ saving ? 'Saving...' : 'Save' }
          style={ { display: deleteMode ? 'none' : 'show' } }
          className="btn btn-primary"
          onClick={ onSave } />

        <input
          type="submit"
          value="Delete"
          className="btn btn-primary"
          style={ { display: deleteMode ? 'show' : 'none' } }
          onClick={ onDelete } />
      </div>
    </form>
  );
};

UserstoryForm.propTypes = {
  // userstory: React.PropTypes.object.isRequired,
  // allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
  deleteMode: React.PropTypes.bool
};

export default UserstoryForm;
