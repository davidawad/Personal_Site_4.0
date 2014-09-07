// Dividers Model
var Divider = Backbone.Model.extend({
	defaults: {
		copy: '',
		url: '',
		spot: ''
	}
});

// Dividers Collection
var Dividers = Backbone.Collection.extend({
	model: Divider,
	url: 'https://spreadsheets.google.com/feeds/list/1DF0qAaJh-nLoXSTjOB5KB-v1oV8C_4se7OW3Br-v-bc/od6/public/values?alt=json'
});

// Dividers View
var DividersView = Backbone.View.extend({
    divider: _.template($('#DividerTmp').html()),
    initialize: function () {
    	  this.collection.on('reset', this.render, this);
        var c = this.collection;
        this.collection.fetch({
            success: function (model, response) {
                var feed = response['feed'];
                var entry = feed['entry'];
                var arr = [];
                for (var i=0; i<entry.length; i++) {
                    obj = {
                        "copy": entry[i].gsx$copy.$t,
                        "url": entry[i].gsx$url.$t,
                        "spot": entry[i].gsx$spot.$t
                    };
                    arr.push(obj);
                }
                c.reset(arr);
            },
            error: function (xhr, textStatus) {
            	console.log('Error: ', textStatus.responseText);
            }
        });
    },

    render: function () {
      this.collection.each(this.list, this);
    },

    list: function (model) {
    	if(model.get('spot') == "1"){
      	$('#Divider1').append(this.divider({model: model}));
    	}
    	
    	if(model.get('spot') == "2"){
    		$('#Divider2').append(this.divider({model: model}));
    	}
    	
    	if(model.get('spot') == "3"){
    		$('#Divider3').append(this.divider({model: model}));
    	}
    }
});

// Experience Model
var Experience = Backbone.Model.extend({
	defaults: {
		name: '',
		timeframe: '',
		description: ''
	}
});

// Experience Collection
var Experiences = Backbone.Collection.extend({
	model: Experience,
	url: 'https://spreadsheets.google.com/feeds/list/16W5WVZA-ORLkYHiZjaPtS58chcilZeT4C7qD56rbkc0/od6/public/values?alt=json'
});

// Experience View
var ExperiencesView = Backbone.View.extend({
    job: _.template($('#ExperienceTmp').html()),
    initialize: function () {
    	  this.collection.on('reset', this.render, this);
        var c = this.collection;
        this.collection.fetch({
            success: function (model, response) {
                var feed = response['feed'];
                var entry = feed['entry'];
                var arr = [];
                for (var i=0; i<entry.length; i++) {
                    obj = {
                        "name": entry[i].gsx$name.$t,
                        "timeframe": entry[i].gsx$timeframe.$t,
                        "description": entry[i].gsx$description.$t
                    };
                    arr.push(obj);
                }
                c.reset(arr);
            },
            error: function (xhr, textStatus) {
            	console.log('Error: ', textStatus.responseText);
            }
        });
    },

    render: function () {
      this.collection.each(this.list, this);
    },

    list: function (model) {
      $('#JobsList').append(this.job({model: model}));
    }
});

// Projects Model
var Project = Backbone.Model.extend({
	defaults: {
		name: '',
		icon: '',
		main: '',
		description: '',
		phone: '',
		url: '',
        linkname: ''
	}
});

// Projects Collection
var Projects = Backbone.Collection.extend({
	model: Project,
	url: 'https://spreadsheets.google.com/feeds/list/1g9T89RB4y4gbc4y_A3XFAQzBFXkCTCyBBCu0j1rEp7c/od6/public/values?alt=json'
});

// Projects View
var ProjectsView = Backbone.View.extend({
    project: _.template($('#ProjectTmp').html()),
    initialize: function () {
        this.collection.on('reset', this.render, this);
        var c = this.collection;
        this.collection.fetch({
            success: function (model, response) {
                var feed = response['feed'];
                var entry = feed['entry'];
                var arr = [];
                for (var i=0; i<entry.length; i++) {
                    obj = {
                        "name": entry[i].gsx$name.$t,
                        "icon": entry[i].gsx$icon.$t,
                        "main": entry[i].gsx$main.$t,
                        "description": entry[i].gsx$description.$t,
                        "phone": entry[i].gsx$phone.$t,
                        "url": entry[i].gsx$url.$t,
                        "linkname": entry[i].gsx$linkname.$t
                    };
                    arr.push(obj);
                }
                c.reset(arr);
            },
            error: function (xhr, textStatus) {
                console.log('Error: ', textStatus.responseText);
            }
        });
    },

    render: function () {
      this.collection.each(this.list, this);
    },

    list: function (model) {
      $('#ProjectList').append(this.project({model: model}));
    }
});

// Skills Model
var Skill = Backbone.Model.extend({
	defaults: {
		name: '',
		percent: '0%'	
	}
});

// Skills Collection
var Skills = Backbone.Collection.extend({
	model: Skill,
	url: 'https://spreadsheets.google.com/feeds/list/1hLiL_u6wPIL3YJ5cI7-nnCKMCb_jGDcugk3SWTdKikw/od6/public/values?alt=json'
});

// Skills View
var SkillsView = Backbone.View.extend({
    skill: _.template($('#SkillTmp').html()),
    initialize: function () {
    	  this.collection.on('reset', this.render, this);
        var c = this.collection;
        this.collection.fetch({
            success: function (model, response) {
                var feed = response['feed'];
                var entry = feed['entry'];
                var arr = [];
                for (var i=0; i<entry.length; i++) {
                    obj = {
                        "name": entry[i].gsx$name.$t,
                        "percent": entry[i].gsx$percent.$t
                    };
                    arr.push(obj);
                }
                c.reset(arr);
            },
            error: function (xhr, textStatus) {
            	console.log('Error: ', textStatus.responseText);
            }
        });
    },

    render: function () {
      this.collection.each(this.list, this);
    },

    list: function (model) {
      $('#SkillsList').append(this.skill({model: model}));
    }
});

var Flow = Backbone.Model.extend({
    defaults: {
        icon: '',
        copy:''
    }
});

var Flows = Backbone.Collection.extend({
    model: Flow,
    url: 'https://spreadsheets.google.com/feeds/list/18lO6vuwKYGcKEQP6QXQMHHRIayaQHpLXqV7FYFbo9os/od6/public/values?alt=json'
});

var WorkflowView = Backbone.View.extend({
    flow: _.template($('#WorkflowTmp').html()),
    initialize: function () {
        this.collection.on('reset', this.render, this);
        var c = this.collection;
        this.collection.fetch({
            success: function (model, response) {
                var feed = response['feed'];
                var entry = feed['entry'];
                var arr = [];
                for (var i=0; i<entry.length; i++) {
                    obj = {
                        "icon": entry[i].gsx$icon.$t,
                        "copy": entry[i].gsx$copy.$t
                    };
                    arr.push(obj);
                }
                c.reset(arr);
            },
            error: function (xhr, textStatus) {
                console.log('Error: ', textStatus.responseText);
            }
        });
    },

    render: function () {
      this.collection.each(this.list, this);
    },

    list: function (model) {
      $('#FlowList').append(this.flow({model: model}));
    }
});

// App Ish
$(function(){
	new DividersView({collection: new Dividers()});
	new ExperiencesView({collection: new Experiences()});
	// new ProjectsView({collection: new Projects()});
	new SkillsView({collection: new Skills()});
    new WorkflowView({collection: new Flows()});
});