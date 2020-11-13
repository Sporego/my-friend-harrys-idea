import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="div container">
      <div className="row">
        <div class="jumbotron col-md-5 semi-transparent">
          <h1 class="display-4">Yo My Dudes Come Vote!</h1>
          <p class="lead">Change begins NOW</p>
          <hr class="my-4"/>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4"/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4"/>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"/>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                  I consent to be awesome.
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </form>
        </div>
        <div className="col-md-1"></div>
        <div className="div col-md-5 card transparent-custom border-0">
          <div className="card-body text-white d-flex flex-column justify-content-center">
            <blockquote className="blockquote mb-0">
              <p>Nobody will ever deprive the American people of the right to vote except the American people themselves and the only way they could do this is by not voting.</p>
              <footer className="blockquote-footer text-white">Franklin D. Roosevelt</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
