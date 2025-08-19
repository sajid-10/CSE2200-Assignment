import { useState, useMemo } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";

export default function ArticlesPage() {
  const data = [
    { title: "Opening Lines that Hook", status: "Published", days: 4 },
    { title: "Cliffhangers Done Right", status: "Draft", days: 9 },
    { title: "Scenes that Breathe", status: "Published", days: 6 },
    { title: "Narrative Arcs Explained", status: "Archived", days: 21 },
    { title: "The Art of Pacing", status: "Draft", days: 13 },
    { title: "Writing Relatable Heroes", status: "Published", days: 2 },
    { title: "The Antagonist’s Perspective", status: "Draft", days: 15 },
    { title: "Dialogue Tags that Work", status: "Published", days: 5 },
    { title: "Tone and Atmosphere", status: "Published", days: 7 },
    { title: "Point of View Shifts", status: "Draft", days: 11 },
    { title: "Writing With Subtext", status: "Published", days: 3 },
    { title: "Chapters that Flow", status: "Draft", days: 16 },
    { title: "Building Tension Gradually", status: "Archived", days: 27 },
    { title: "The Power of Silence", status: "Published", days: 1 },
    { title: "Writing Compelling Endings", status: "Draft", days: 14 },
    { title: "Evolving Character Arcs", status: "Published", days: 8 },
    { title: "The Weight of Setting", status: "Draft", days: 12 },
    { title: "Myth and Legend in Fiction", status: "Archived", days: 35 },
    { title: "Scenes of Introspection", status: "Published", days: 10 },
    { title: "Metaphors that Matter", status: "Draft", days: 18 }
  ];

  const pageSize = Math.ceil(data.length / 4); // 4 pages
  const totalPages = 4;
  const [page, setPage] = useState(1);

  const rows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [page]);

  const getBadge = (status) => (
    <Badge
      pill
      bg={status === "Published" ? "success" : status === "Draft" ? "warning" : "secondary"}
      style={{ fontSize: "0.9rem", padding: "0.5rem 0.8rem" }}
    >
      {status}
    </Badge>
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem", backgroundColor: "#f0f2f5" }}>
      <div style={{ width: "100%", maxWidth: 900 }}>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>My Articles</h1>

        <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <Table hover responsive>
            <thead style={{ backgroundColor: "#181852ff", fontWeight: "600" }}>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Last Edited</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td>{getBadge(row.status)}</td>
                  <td className="text-muted">{row.days} days ago</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
            <Pagination>
              <Pagination.Prev disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} />
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <Pagination.Item key={n} active={n === page} onClick={() => setPage(n)}>{n}</Pagination.Item>
              ))}
              <Pagination.Next disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))} />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
