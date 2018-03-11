var indexTopics = document.querySelectorAll('.index__topic');

indexTopics.forEach(function(topic) {
  topic.addEventListener('click', function() {
    indexTopics.forEach(function(topic) {
      topic.style.backgroundColor = '#e2e2e2';
      topic.style.color = '#000';
      topic.style.transform = 'translateX(0px)';
    });
    this.style.backgroundColor = '#0069FF';
    this.style.color = '#fff';
    this.style.transform = 'translateX(100px)';
  });
});