import { render, screen } from "@testing-library/react";
import { ErrorAlert } from "../components/ErrorAlert";
import { describe, it, expect, vi } from "vitest";

describe("ErrorAlert", () => {
  it("deve exibir a mensagem padrão quando não for passada uma mensagem", () => {
    render(<ErrorAlert error={true} onClose={vi.fn()} />);
    expect(
      screen.getByText(
        "Houve um problema no momento. Por favor, tente novamente mais tarde."
      )
    ).toBeInTheDocument();
  });

  it("deve exibir a mensagem customizada quando passada", () => {
    render(
      <ErrorAlert
        error={true}
        onClose={vi.fn()}
        message="Erro personalizado"
      />
    );
    expect(screen.getByText("Erro personalizado")).toBeInTheDocument();
  });

  it("não deve exibir o alerta quando error for false", () => {
    render(<ErrorAlert error={false} onClose={vi.fn()} />);
    expect(
      screen.queryByText(
        "Houve um problema no momento. Por favor, tente novamente mais tarde."
      )
    ).not.toBeInTheDocument();
  });
});