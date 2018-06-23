export default (state , action) => {
  let count = 0;
  switch (action.type) {
    case 'increase':
    
      return { count: state.count+1 }

    break;

    case 'input':
    	return {count: +action.value}
    default:
      return { count: 0 }
  }
}
