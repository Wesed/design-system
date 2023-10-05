import '../../src/styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  isSpaceToken?: boolean
}
export function TokensGrid({
  tokens,
  hasRemValue = false,
  isSpaceToken = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {isSpaceToken && (
                <td>
                  <span
                    className="tokens-box"
                    style={{ padding: value }}
                  ></span>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
