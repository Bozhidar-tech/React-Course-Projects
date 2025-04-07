export default function UserData({ onChange, userData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userData.initialInvestment}
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userData.annualInvestment}
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userData.expectedReturn}
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userData.duration}
            required
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
