import http.server
import socketserver
import os

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Handle trailing slash like Vercel does
        path = self.path.rstrip('/')
        
        if path == '':
            self.path = '/index.html'
        # If the path has no extension, assume it's an HTML file
        elif '.' not in path.split('/')[-1]:
            # Check if the HTML file exists
            if os.path.exists(self.translate_path(path + '.html')):
                self.path = path + '.html'
                
        return super().do_GET()

print(f"=========================================")
print(f"Vercel Local Simulator started!")
print(f"Open this link in your browser:")
print(f"http://localhost:{PORT}")
print(f"=========================================")

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    httpd.serve_forever()
