(function(){"use strict";let r=new Uint8Array;function s(){const n=r.findIndex((a,e)=>a===36&&r[e+2]==62);if(n<0)return;const i=r.subarray(n+1),t=i.findIndex((a,e)=>a===36&&i[e+2]==62);t<0||(postMessage(r.subarray(n,n+t+1)),r=r.subarray(n+t+1),s())}onmessage=n=>{r=new Uint8Array(Array.from(r).concat(Array.from(n.data))),s()}})();
