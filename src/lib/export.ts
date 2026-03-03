export interface ExportOptions {
  filename: string;
  columns: string[];
  data: Record<string, unknown>[];
}

export function exportToCSV({ filename, columns, data }: ExportOptions): void {
  const header = columns.join(',');
  const rows = data.map(row =>
    columns.map(col => {
      const val = row[col];
      if (typeof val === 'string' && val.includes(',')) {
        return `"${val}"`;
      }
      return String(val ?? '');
    }).join(',')
  );

  const csv = [header, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.click();
  URL.revokeObjectURL(url);
}
