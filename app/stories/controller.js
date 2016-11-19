import Ember from 'ember';

export default Ember.Controller.extend({
  newStory: {
    body: ''
  },
  showDialogWithParent: false,

  actions: {
    newStory: function () {
      var newPost = this.store.createRecord('story',
        {
          body: this.get('newStory.body'),
          createdAt: new Date()
        }
      );
      newPost.save();
    },

    closeDialogWithParent: function () {
      this.toggleProperty('showDialogWithParent');
    }
  }
});
