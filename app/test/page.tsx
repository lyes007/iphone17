export default function TestPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1 style={{ marginBottom: '40px' }}>Image Test Page</h1>
      <div style={{ border: '2px solid red', padding: '20px' }}>
        <p>Testing image load:</p>
        <img 
          src="/iphone-17_overview__d4o74q28yjma.png" 
          alt="Test" 
          style={{ maxWidth: '500px', height: 'auto' }}
          onError={(e) => {
            console.error('❌ IMAGE FAILED TO LOAD');
            console.error('Tried to load:', e.currentTarget.src);
          }}
          onLoad={() => {
            console.log('✅ IMAGE LOADED SUCCESSFULLY');
          }}
        />
      </div>
      <p style={{ marginTop: '20px' }}>Check console for load status</p>
    </div>
  );
}

