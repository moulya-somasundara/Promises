# Promises
Asynchronous Code, Files, and Promises

This program will export four methods:

1. getFileAsString(path)

This method will, when given a path, return a promise that resolves to a string with the contents of the files.

If no path is provided, it will return a rejected promise.

If there are any errors reading the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

2. getFileAsJSON(path)

This method will, when given a path, return a promise that resolves to a JavaScript object. Using the JSON.parse function to convert a string to a JavaScript object (if it's valid!).

If no path is provided, it will return a rejected promise.

If there are any errors reading the file or parsing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

3. saveStringToFile(path, text)

This method will take the text supplied, and store it in the file specified by path. The function returns a promise that will resolve to true when saving is completed.

If there are any errors writing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

4. saveJSONToFile(path, obj)

This method will take the obj supplied and convert it into a string so that it may stored as in a file. The function returns a promise that will resolve to true when saving is completed.

If no path or obj is provided, it will return a rejected promise.


