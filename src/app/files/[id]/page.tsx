type FilePageProps = {
  params: {
    id: string;
    parsed?: number; // マッチャーによる型変換結果（任意）
  };
};

export default function FilePage({ params }: FilePageProps) {
  return (
    <div>
      <h1>File Details</h1>
      <p>ID: {params.id}</p>
      <p>Parsed ID: {params.parsed}</p>
    </div>
  );
}
