import Typed from 'typed.js';
$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  particlesJS.load('particles-js', 'particlesjs.json');
});

document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    loop: false,
    loopCount: Infinity,
    onBegin: function(self) {
      prettyLog('onBegin ' + self);
    },
    onComplete: function(self) {
      prettyLog('onComplete ' + self);
    },
    preStringTyped: function(pos, self) {
      prettyLog('preStringTyped ' + pos + ' ' + self);
    },
    onStringTyped: function(pos, self) {
      prettyLog('onStringTyped ' + pos + ' ' + self);
    },
    onLastStringBackspaced: function(self) {
      prettyLog('onLastStringBackspaced ' + self);
    },
    onTypingPaused: function(pos, self) {
      prettyLog('onTypingPaused ' + pos + ' ' + self);
    },
    onTypingResumed: function(pos, self) {
      prettyLog('onTypingResumed ' + pos + ' ' + self);
    },
    onReset: function(self) {
      prettyLog('onReset ' + self);
    },
    onStop: function(pos, self) {
      prettyLog('onStop ' + pos + ' ' + self);
    },
    onStart: function(pos, self) {
      prettyLog('onStart ' + pos + ' ' + self);
    },
    onDestroy: function(self) {
      prettyLog('onDestroy ' + self);
    }
  });

  document.querySelector('.toggle').addEventListener('click', function() {
    typed.toggle();
  });
  document.querySelector('.stop').addEventListener('click', function() {
    typed.stop();
  });
  document.querySelector('.start').addEventListener('click', function() {
    typed.start();
  });
  document.querySelector('.reset').addEventListener('click', function() {
    typed.reset();
  });
  document.querySelector('.destroy').addEventListener('click', function() {
    typed.destroy();
  });
  document.querySelector('.loop').addEventListener('click', function() {
    toggleLoop(typed);
  });
