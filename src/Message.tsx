// In React, a function component should always follow Pascal casing
function Message() {
  // JSX: Javascript XML
  const name = "Murilo";
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

// Export it as a default object from this module
export default Message;
