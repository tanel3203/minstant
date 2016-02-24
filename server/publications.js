  Meteor.publish("chats",function() {
  	return Chats.find();
  });
  Meteor.publish("users",function() {

				
	return Meteor.users.find();
  });