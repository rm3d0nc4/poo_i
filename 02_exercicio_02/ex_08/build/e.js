"use strict";
// Compiled with --strictNullChecks
var x;
var y;
var z;
x; // Error, reference not preceded by assignment
y; // Error, reference not preceded by assignment
z; // Ok
x = 1;
y = null;
x; // Ok
y; // Ok
