export default function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
          © 2025 51 Métodos de Musculação. Todos os direitos reservados.
        </p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="#termos" 
            className="hover:text-primary transition-colors"
            data-testid="link-footer-terms"
          >
            Termos de Uso
          </a>
          <span>•</span>
          <a 
            href="#privacidade" 
            className="hover:text-primary transition-colors"
            data-testid="link-footer-privacy"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
