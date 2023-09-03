import Card from 'react-bootstrap/Card';
const HomePage = () => {
  return (
    <>
      {[
        'Primary',
        
      ].map((variant) => (
        <Card 
          bg={variant.toLowerCase()}
          key={variant}
          text={variant === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2 my-9 mx-auto"
        >
          <Card.Header className="mx-auto">Welcome!</Card.Header>
          <Card.Body>
            {/* <Card.Title>{variant} </Card.Title> */}
            <Card.Text>
             {` This is a authentecated home section which is initially created for demo.`}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default HomePage