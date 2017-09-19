# synchronised-iteration
Array iterator in synchronised way. It takes array,  promise function to run for each item of the array and limit to run the promise function to run at a time, default limit is 1. It returns promise of all promisses of given promise functions.
