#!/usr/bin/env node

/**
 * Generate CSS3 transform animation that traces a circle.
 *
 * $ node tracecircle.js animationName vendorPrefix percentStep radiusPixels
 *
 * For example:
 *
 * $ node tracecircle.js floating -webkit- 10 20
 *
 * Returns:
 *
 * @-webkit-keyframes floating {
 *   0% { -webkit-transform: translateX(20.0000px) translateY(0.0000px); }
 *   10% { -webkit-transform: translateX(16.1803px) translateY(11.7557px); }
 *   20% { -webkit-transform: translateX(6.1803px) translateY(19.0211px); }
 *   30% { -webkit-transform: translateX(-6.1803px) translateY(19.0211px); }
 *   40% { -webkit-transform: translateX(-16.1803px) translateY(11.7557px); }
 *   50% { -webkit-transform: translateX(-20.0000px) translateY(0.0000px); }
 *   60% { -webkit-transform: translateX(-16.1803px) translateY(-11.7557px); }
 *   70% { -webkit-transform: translateX(-6.1803px) translateY(-19.0211px); }
 *   80% { -webkit-transform: translateX(6.1803px) translateY(-19.0211px); }
 *   90% { -webkit-transform: translateX(16.1803px) translateY(-11.7557px); }
 *   100% { -webkit-transform: translateX(20.0000px) translateY(-0.0000px); }
 * }
*/
keyframes(process.argv[2], process.argv[3], parseInt(process.argv[4]),  parseInt(process.argv[5]));

function keyframes(animationName, vendorPrefix, percentStep, radiusPixels) {
  ret = '@' + vendorPrefix + 'keyframes ' + animationName + " {\n";
  for (var i = 0; i <= 100; i = i + percentStep) {
    ret += step(vendorPrefix, i, radiusPixels);
  }
  ret += '}';
  console.log(ret);
}

function step(vendorPrefix, percent, r) {
  deg = percent * 360 / 100;
  return '  ' + percent + '% { ' + vendorPrefix + 'transform: translateX(' + (Math.cos(deg*Math.PI/180) * r).toFixed(4) + 'px) translateY(' + (Math.sin(deg*Math.PI/180) * r).toFixed(4) + "px); }\n";
}
