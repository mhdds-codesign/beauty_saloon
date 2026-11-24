import uvicorn
import sys
import os
import subprocess
import time

base = os.path.dirname(os.path.abspath(__file__))
backend_path = os.path.join(base, "backend")
frontend_path = os.path.join(base, "frontend")

def free_port(port):
    """آزادسازی پورت در ویندوز در صورت اشغال بودن توسط پردازه‌های قبلی"""
    try:
        cmd = f'netstat -ano | findstr ":{port} "'
        output = subprocess.check_output(cmd, shell=True, stderr=subprocess.DEVNULL).decode()
        for line in output.strip().splitlines():
            parts = line.split()
            if len(parts) >= 5 and ("LISTENING" in parts or "ESTABLISHED" in parts):
                pid = parts[-1]
                if pid and pid != "0" and pid != str(os.getpid()):
                    print(f"پورت {port} توسط پردازه {pid} اشغال بود. در حال آزادسازی...")
                    subprocess.run(f"taskkill /F /PID {pid}", shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    time.sleep(0.5)
    except Exception:
        pass

if __name__ == "__main__":
    # آزادسازی پورت‌های ۸۰۰۰ و ۵۱۷۳ قبل از اجرا
    free_port(8000)
    free_port(5173)

    print("start running frontend...")
    frontend_subp = subprocess.Popen(
        "npm run dev",
        cwd=frontend_path,
        shell=True
    )

    os.chdir(backend_path)
    if backend_path not in sys.path:
        sys.path.insert(0, backend_path)
    if base not in sys.path:
        sys.path.insert(0, base)

    print("start running backend on http://127.0.0.1:8000 ...")
    try:
        uvicorn.run("backend.app.main:app", host="127.0.0.1", port=8000, reload=False)
    except KeyboardInterrupt:
        print("\nturning backend off...")
    except Exception as e:
        print(f"\nBackend error: {e}")
    finally:
        try:
            subprocess.run(['taskkill', '/F', '/T', '/PID', str(frontend_subp.pid)],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception:
            pass
        print("done!")
