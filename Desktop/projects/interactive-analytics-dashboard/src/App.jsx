import BarChartComponent from './components/BarChartComponent'; // <-- IMPORT HERE

function App() {
  return (
    <div className="dashboard-container">
      <h1>Interactive Analytics Dashboard</h1>
      
      {/* USE YOUR NEW COMPONENT HERE */}
      <div style={{ padding: '20px' }}>
        <BarChartComponent />
      </div>

    </div>
  );
}

export default App;