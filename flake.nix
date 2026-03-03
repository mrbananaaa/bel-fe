{
  description = "Node development shell (nix shell)";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = inputs:
    inputs.flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import (inputs.nixpkgs) {inherit system;};
      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            corepack
            eslint_d
            prettierd
            typescript-language-server
            tailwindcss-language-server
            nodePackages.vscode-langservers-extracted

            lazygit
          ];

          shellHook = ''
            echo "Node dev shell activated! Happy coding 🚀."
          '';
        };
      }
    );
}
