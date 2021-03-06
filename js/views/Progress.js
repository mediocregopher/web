//returns the file view
define(["jade!templates/ProgressBar"], function(ProgressTemplate){ 
    return Backbone.View.extend({
        className: "outerBar clouds",

        render: function(){
          //render a blank slate, change the text, percentages, and link through the functions below
          this.$el.html(ProgressTemplate({}))
        },

        percentage: function(percentage){
          return this.$el.find(".innerBar").css("width",percentage)
        },
        text : function(text){
          return this.$el.find("p.barText").text(text)
        },
        link: function(link, text, downloadable){
          downloadable = _.isUndefined(downloadable) ? false : true

          this.$el.find(".barLink")
                  .attr("href",link)
                  .text(text)
                  .show()

          if (downloadable){
            this.$el.find(".barLink")
                    .attr("download",text)
          }
        },

        clickLink : function(){
          this.$el.find(".barLink")[0].click()
        },

        markLoading: function(){
          this.$el.find(".innerBar")
            .removeClass("success")
            .addClass("loading")
          this.$el.find(".delete").show()
        },

        markSuccess: function(){
          this.$el.find(".innerBar")
            .removeClass("loading")
            .addClass("success")
          this.text("")
          this.$el.find(".delete").hide()
        },

    })
});
