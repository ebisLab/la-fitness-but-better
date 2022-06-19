import './App.css';

function App() {
  return (
    <div className='platform'>
      <header>Tab section</header>

      <main className='grid-container'>
        <section className='first-column'>
          <div>
            <input type="text" />
            <button>✔</button>
            <button>🧸</button>
          </div>
          <div className='member-card'>
            <div className='member-info'>
              <div style={{background: 'green'}}>status</div>
              <div className='status'>
                <table>
                  <tr>
                    <th>Barcode</th>
                    <td>barcode #</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>member name</td>
                  </tr>
                  <tr>
                    <th>Expiration</th>
                    <td>none</td>
                  </tr>
                </table>
                <div>
                  <button>service</button>
                  <button>Get $</button>
                </div>
              </div>
            </div>
          </div>
          <div className='member-privileges'>
            <div>🎾</div>
            <div>G(1)</div>
            <button>Guest Waiver</button>
          </div>
          <div className='card-profile-picture'>
            
            <div style={{ height: "200px", width:'200px', background: "red"}} />
            <div>
              <button>Delete</button><button>Photo</button>
            </div>
          </div>
          <div>
            members under plan
          </div>
        </section>
        <section className='second-column'>
          <div>check in tools</div>
          <div className='record-container'>
            <div>Last Refresh: 11.28 AM <button>Refresh</button></div>
            <div>Check In History</div>
            <table>
              <tbody>
                <tr>
                  <th>Photo</th>
                  <th>Service</th>
                  <th>Barcode</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
                <tr>
                  <td>something</td>
                  <td><button>Service</button></td>
                  <td>something</td>
                  <td>something</td>
                  <td>something</td>
                  <td>something</td>
                  <td>something</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer>
        <div>count</div>
      </footer>

    </div>
  );
}

export default App;
